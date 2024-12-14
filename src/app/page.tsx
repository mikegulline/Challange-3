import Syntax from '@/components/syntax';

export default function HomePage() {
  return (
    <div className=' max-w-3xl m-auto md:p-5'>
      <Syntax language='jsx'>{`/* 
  For challenge 3
    1.  Create reusable FieldProps Type
    2.  Extract text input into a component
    3.  Create a select input component
    4.  Create a FieldInputMap for inputs
    5.  Extract the input component from 
        FieldInputMap inside the Field component
    6.  Spread the Field props to the input component
*/

//  1.  Create reusable FieldProps Type
//      Should go in types
type FieldProps = {
  fieldId: string;
  fieldDef: FieldDefinition;
  fieldState: FieldState;
  handleChange: (value: string) => void;
};

//  2.  Extract text input into a component
//      Use new FieldProps type
const Text = (props: FieldProps) => (
  <input
    className='form-control'
    type='text'
    name={props.fieldId}
    value={props.fieldState.value}
    onChange={(e) => props.handleChange(e.target.value)}
    onBlur={(e) => props.handleChange(e.target.value)}
  />
);

//  3.  Create a select input component
//      Use new FieldProps type
const Select = (props: FieldProps) => {
  // narrow props.fieldDef to get options auto complete
  if (props.fieldDef.type !== 'select') {
    throw new Error('Invalid fieldDef type for Select component');
  }
  return (
    <select
      className='form-control'
      name={props.fieldId}
      onChange={(e) => props.handleChange(e.target.value)}
      onBlur={(e) => props.handleChange(e.target.value)}
    >
      {props.fieldDef.options.map((option) => (
        <option key={option.display} value={option.value}>
          {option.display}
        </option>
      ))}
    </select>
  );
};

//  4.  Create a FieldInputMap for inputs
//      Add more as needed
const FieldInputMap = {
  select: Select,
  text: Text,
};

const Field = (props: FieldProps) => {
  // 5.  Extract the input component by type
  const FieldInput = FieldInputMap[props.fieldDef.type];
  return (
    <div className='form-group'>
      <label>
        {props.fieldDef.label}:
        {props.fieldDef.required && <span className='asterisk'>*</span>}
      </label>
      {/* 6.  Spread Field props to input component */}
      <FieldInput {...props} />
      {props.fieldState.error && (
        <span className='err'>{props.fieldState.error}</span>
      )}
    </div>
  );
};`}</Syntax>
    </div>
  );
}
