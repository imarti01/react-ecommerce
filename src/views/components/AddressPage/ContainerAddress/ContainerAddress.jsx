import { useAuthContext } from "../../../../hooks";
import { FormAddress } from "../FormAddress/FormAddress";
import { SavedAddress } from "../SavedAddress/SavedAddress";

import "./ContainerAddress.scss";

export const ContainerAddress = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  const { savedAddress } = user;
  return (
    <div className="container-address">
      {savedAddress && savedAddress.length > 0 ? (
        <SavedAddress savedAddress={savedAddress} />
      ) : (
        <FormAddress />
      )}
    </div>
  );
};
