import React from "react";
import { TailSpin } from "react-loader-spinner";

function AECLoader() {
  return (
    <div className="flex justify-center items-center mt-20">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#BC7B18"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default AECLoader;
