export const FormRegister = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Surname:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button>Submit</button>
    </form>
  );
};
