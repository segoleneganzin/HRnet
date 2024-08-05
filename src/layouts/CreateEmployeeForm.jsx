import Input from '../components/Input';

const CreateEmployeeForm = () => {
  return (
    <form>
      <Input label={'First Name'} name={'firstName'} />
      <Input label={'Last Name'} name={'lastName'} />
      <Input label={'Date of Birth'} name={'birth'} type='date' />
      <Input label={'Start Date'} name={'startDate'} type='date' />
      <fieldset>
        <legend>Address</legend>
        <Input label={'Street'} name={'street'} />
        <Input label={'City'} name={'city'} />
        <p>State</p>
        <Input label={'Zip Code'} name={'zipCode'} />
      </fieldset>
      <p>Department</p>
    </form>
  );
};

export default CreateEmployeeForm;
