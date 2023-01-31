import React from "react";

import { useUserDetailQuery } from "../services/user";

export function UserDetails() {
  // The `state` arg is correctly typed as `RootState` already
    const {data, isSuccess, error, isLoading} = useUserDetailQuery(null)
  // omit rendering logic
  return (
    <React.Fragment>
        {JSON.stringify(data)}
    </React.Fragment>
  );
}
