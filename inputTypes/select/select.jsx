import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import StylableDropDown from './select-stylable.jsx';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');
const { DropDownMenu } = require('material-ui');

AutoForm.addInputType("select", {
  template: "afSelect_reactAutoformMaterialUi",
  valueOut: function () {
    return this.val();
  },
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          return $.trim(item);
        });
      }
      return val;
    },
    "number": AutoForm.Utility.stringToNumber,
    "numberArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToNumber(item);
        });
      }
      return val;
    },
    "boolean": AutoForm.Utility.stringToBool,
    "booleanArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToBool(item);
        });
      }
      return val;
    },
    "date": AutoForm.Utility.stringToDate,
    "dateArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToDate(item);
        });
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    //can fix issues with some browsers selecting the firstOption instead of the selected option
    context.atts.autocomplete = "off";

    var itemAtts = _.omit(context.atts, 'firstOption');
    var firstOption = context.atts.firstOption;

    // build items list
    context.items = [];

    // If a firstOption was provided, add that to the items list first
    if (firstOption !== false) {
      context.items.push({
        name: context.name,
        label: (typeof firstOption === "string" ? firstOption : "(Select One)"),
        value: "",
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        //
        // Setting this to an empty string caused problems if option with value
        // 1 was in the options list because Spacebars evaluates "" to 1 and
        // considers that a duplicate.
        // See https://github.com/aldeed/meteor-autoform/issues/656
        _id: "AUTOFORM_EMPTY_FIRST_OPTION",
        selected: false,
        atts: itemAtts
      });
    }

    // Add all defined options
    _.each(context.selectOptions, function(opt) {
      if (opt.optgroup) {
        var subItems = _.map(opt.options, function(subOpt) {
          return {
            name: context.name,
            label: subOpt.label,
            value: subOpt.value,
            htmlAtts: _.omit(subOpt, 'label', 'value'),
            // _id must be included because it is a special property that
            // #each uses to track unique list items when adding and removing them
            // See https://github.com/meteor/meteor/issues/2174
            //
            // The toString() is necessary because otherwise Spacebars evaluates
            // any string to 1 if the other values are numbers, and then considers
            // that a duplicate.
            // See https://github.com/aldeed/meteor-autoform/issues/656
            _id: subOpt.value.toString(),
            selected: (subOpt.value === context.value),
            atts: itemAtts
          };
        });
        context.items.push({
          optgroup: opt.optgroup,
          items: subItems
        });
      } else {
        context.items.push({
          name: context.name,
          label: opt.label,
          value: opt.value,
          htmlAtts: _.omit(opt, 'label', 'value'),
          // _id must be included because it is a special property that
          // #each uses to track unique list items when adding and removing them
          // See https://github.com/meteor/meteor/issues/2174
          //
          // The toString() is necessary because otherwise Spacebars evaluates
          // any string to 1 if the other values are numbers, and then considers
          // that a duplicate.
          // See https://github.com/aldeed/meteor-autoform/issues/656
          _id: opt.value.toString(),
          selected: (opt.value === context.value),
          atts: itemAtts
        });
      }
    });

    return context;
  }
});

class Select extends React.Component {
  constructor() {
    super(); 
    this._getValue = _.bind(this._getValue, this);
    this._setIndex = _.bind(this._setIndex, this);
    this.getDropDown = _.bind(this.getDropDown, this);
    this.state = {
      selectedIndex: 0,
      dropDownMenu: null, 
    };
  }

  getChildContext() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme
    };
  }

  _getValue(event, index, obj) {
    const domNode = ReactDOM.findDOMNode(this);
    $(domNode).val(obj.value)
    this._setIndex(index)
  }

  _setIndex(selectedIndex){
    this.setState({
      selectedIndex,
    });
  }

  componentDidMount(){
    let domNode = ReactDOM.findDOMNode(this);
    let selectParent = $(domNode).children()[0]

    $(selectParent).css({
      width: '100%',
      height: '100%'
    })

    let selectedIndex = this.props.atts.selectedIndex
    let value = this.props.atts.items[selectedIndex]

    this._getValue(null,selectedIndex,value)

  }

  getDropDown() {
    if(this.props.atts.stylable) {
      return (
        <StylableDropDown
          options={this.props.atts.items}
          key="stylable"
          onChange={this._getValue}
          stylableOptions={this.props.atts.stylableOptions}
          selectedIndex={ this.state.selectedIndex }
        />
      );
    }
    return (
      <DropDownMenu
        valueMember="value"
        className='muiSelect'
        key="materialui"
        displayMember="label"
        selectedIndex={ this.state.selectedIndex }
        errorText={this.props.atts.err}
        onChange={this._getValue}
        menuItems={this.props.atts.items} />
    );
  }

  render() {
    const materialDropDown = 0;
    const stylableDropDown = 1;

    const dropDown = this.getDropDown();

    return (
      <div
        ref='muiSelectContainer'
        className='muiSelectContainer'
        data-schema-key={this.props.atts.dsk}>
        {dropDown}
     </div>
    );
  }
};

Select.childContextTypes = {
  muiTheme: React.PropTypes.object
}

Template["afSelect_reactAutoformMaterialUi"].helpers({
  atts: function(){

    let atts = new ReactAutoformUtility(this.atts);
    atts.items = this.items
    atts.selectedIndex = 0
    atts.stylable = this.atts.stylable || false
    atts.stylableOptions = this.atts.stylableOptions || {}

    if(this.value){
      atts.value = this.value
      let self = this
      _.each(self.selectOptions,function(item,index){
        if(item.value === self.value ){
          atts.selectedIndex = index
          atts.items = self.selectOptions
        }
      })
    }
     return atts;
  },
  Select: function(){
    return Select;
  }
})
