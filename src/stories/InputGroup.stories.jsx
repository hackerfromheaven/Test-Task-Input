import InputComponent from "../components/InputComponent/inputComponent";
export default {
    title: 'Components/InputComponent',
    component: InputComponent,
    argTypes:{
      size: {control: {type: 'select'}, options: ['small', 'medium', 'large', 'exta large']},
      state: {
        control: {
          type: 'select',
        },
        options: ['default', 'hover', 'focus', 'error', 'error focus', 'disabled'],
      },
          alignment: {
            control: { type: "select"},
            options: ["left", "center", "right"] 
          },
          userText: {control: 'boolean'},
          info: {control: 'boolean'},
          infoMessage: {control:'text' },
          helperText: {control: 'boolean'},
          helperTextMessage: {control: 'text'},
          border: { control: "boolean" },
          placeholder: { control: 'text' },
          label: {control: 'text'},
          labelSize: {control: {type: 'select'}, options: ['small', 'medium']},
          labelPosition: {control: {type: 'select'},
        options: ['top', 'left']},
iconBefore: {control: 'boolean'},
iconAfter: {control: 'boolean'},
shortkey: {control: 'boolean'}
    },
}
const Template = (args) => <InputComponent {...args}/>

export const Playground = Template.bind({})
Playground.args = {
  size: 'medium',
  state: 'default',
  alignment: 'left',
  border: true,
  userText: true,
  info: true,
  helperText: true,
  helperTextMessage: 'This is a hint text to help user',
  infoMessage: 'This is tooltip',
  placeholder: 'Input',
  iconBefore: true,
  iconAfter: true,
  shortkey: true,
  label: 'Label',
  labelSize: 'medium',
  labelPosition: 'top'
}