import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import ButtonGroup from "../../SharedGroup/ButtonGroup";
import MultiInputGroup from "../../SharedGroup/MultiInputGroup";
import {createItem} from "../../redux/actions/itemActions"
import {CREATE_ITEM} from "../../redux/constants/itemConstant"
import { successToast, failureToast } from "../../Toastify/Toast";
import "./CreateItem.css";

export class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: true,
      formSetting: {
        itemName: {
          name: "itemName",
          type: "text",
          placeholder: "Enter Item Name",
          handleOnChange: {
            inputOnChange: this.handleOnChange,
          },
          value: "",
          error: {
            message: "",
            noError: null,
          },
        },
        rentAmount: {
          name: "rentAmount",
          type: "number",
          placeholder: "Enter Rent Price",
          handleOnChange: {
            inputOnChange: this.handleOnChange,
          },
          value: "",
          error: {
            message: "",
            noError: null,
          },
        },
        description: {
          name: "description",
          type: "text",
          placeholder: "Enter Item Description",
          handleOnChange: {
            inputOnChange: this.handleOnChange,
          },
          value: "",
          error: {
            message: "",
            noError: null,
          },
        },
        availability: {
            name: "availability",
            type: "boolean",
            value: "",
            error: {
              message: "",
              noError: null,
            },
          },
        dateInput: {
          name: "dateInput",
          type: "dateInput",
          startDate: new Date(),
          value: "",
          handleOnChange: {
            inputOnChange: this.handleOnDateChange,
          },
        },
      },
      validate: {
        itemName: {
          noError: null,
          message: "",
        },
        rentAmount: {
          noError: null,
          message: "",
        },
        description: {
          noError: null,
          message: "",
        },
      },
    };
  }
  checkInputValidation = (errorState, inputName, inputValue) => {
    switch (inputName) {
      case "itemName":
        let validatedItemName;
        validatedItemName = validator.isEmpty(inputValue);
        if (validatedItemName) {
          errorState.itemNameError.noError = false;
          errorState.itemNameError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.itemNameError.noError = true;
          errorState.itemNameError.message = "";
          return errorState;
        }
      case "rentAmount":
        let validatedRentAmount;
        validatedRentAmount = validator.isEmpty(inputValue);
        if (validatedRentAmount) {
          errorState.rentAmountError.noError = false;
          errorState.rentAmountError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.rentAmountError.noError = true;
          errorState.rentAmountError.message = "";
          return errorState;
        }
      case "description":
        let validatedDescription;
        validatedDescription = validator.isEmpty(inputValue);
        if (!validatedDescription) {
          errorState.descriptionError.noError = false;
          errorState.descriptionError.message = "Cannot be empty";
          return errorState;
        } else {
          errorState.descriptionError.noError = true;
          errorState.descriptionError.message = "";
          return errorState;
        }
      default:
        return errorState;
    }
  };
  handleOnChange = (event) => {
    let inputForm = {
      ...this.state.formSetting,
    };
    inputForm[event.target.name].value = event.target.value;
    let isValidatedCheck = this.checkInputValidation(
      this.state.validate,
      event.target.name,
      event.target.value
    );
    inputForm["itemName"].error = isValidatedCheck.itemNameError;
    inputForm["rentAmount"].error = isValidatedCheck.rentAmountError;
    inputForm["description"].error = isValidatedCheck.descriptionError;
    this.setState({
      ...this.state,
      formSetting: inputForm,
    });
    if (
      inputForm["itemName"].error.noError === false ||
      inputForm["rentAmount"].error.noError === false ||
      inputForm["description"].error.noError === false
    ) {
      this.setState({
        canSubmit: true,
      });
      return;
    }
    if (
      inputForm["itemName"].error.noError === true &&
      inputForm["rentAmount"].error.noError === true &&
      inputForm["description"].error.noError === true
    ) {
      this.setState({
        canSubmit: false,
      });
      return;
    } else {
      this.setState({
        ...this.state,
        formSetting: inputForm,
      });
      return;
    }
  };
  handleOnDateChange = (date) => {
    let inputForm = {
      ...this.state.formSetting,
    };
    inputForm["dateInput"].startDate = date;
    this.setState({
      ...this.state,
      formSetting: inputForm,
    });
  };
  
  handleItemSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        dateInput,
        itemName,
        rentAmount,
        description,
        availability,
      } = this.state.formSetting;
      let itemObj = {
        itemName: itemName.value,
        rentAmount: rentAmount.value,
        date: dateInput.startDate,
        description: description.value,
        availability : true
      };
      // console.log("itemObj", userObj)
      
      await this.props.createItem(itemObj)
      successToast("Rental Item Created!")
      let inputForm = {
        ...this.state.formSetting,
      };
      inputForm["itemName"].value = "";
      inputForm["rentAmount"].value = "";
      inputForm["dateInput"].startDate = new Date();
      inputForm["description"].value = "";
    

      this.setState({
        ...this.state,
        formSetting: inputForm,
        canSubmit: false,
      });
      

    } catch (e) {
      failureToast(e);
    }
  };
  render() {
    const { canSubmit, formSetting } = this.state;
    let inputArray = [];
    for (let key in formSetting) {
      inputArray.push({
        formSetting: formSetting[key],
      });
    }
    return (
      <div className="item">
        <div className="item--input-container">
          <form className="signup-form" onSubmit={this.handleItemSubmit}>
            {inputArray.map((element) => {
              const {
                formSetting: {
                  name,
                  type,
                  value,
                  handleOnChange,
                  placeholder,
                  error,
                  startDate,
                  valueArray,
                },
              } = element;
              return (
                <MultiInputGroup
                  type={type}
                  value={value}
                  handleOnChange={handleOnChange}
                  placeholder={placeholder}
                  error={error}
                  name={name}
                  key={name}
                  startDate={startDate}
                  valueArray={valueArray}
                />
              );
            })}
            <br />
            <ButtonGroup
              buttonStyle="form-button"
              title="Submit"
              disabled={canSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, {createItem})(CreateItem);