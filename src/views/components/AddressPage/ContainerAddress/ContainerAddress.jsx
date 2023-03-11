import { useAuthContext } from "../../../../hooks";
import { FormAddress } from "../FormAddress/FormAddress";
import { SavedAddress } from "../SavedAddress/SavedAddress";

export const ContainerAddress = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  const { savedAddress } = user;
  return (
    <div>
      {savedAddress && savedAddress.length > 0 ? (
        <SavedAddress savedAddress={savedAddress} />
      ) : (
        <FormAddress />
      )}
    </div>
  );
};
