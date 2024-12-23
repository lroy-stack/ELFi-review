import React from "react";
import AirdropDetails from "./AirdropDetails";
import TokenBenefits from "./TokenBenefits";
import HowToUsePlatform from "./HowToUsePlatform";
import ElfiLiquidityPool from "./ElfiLiquidityPool";

const AirdropFarming = () => (
  <>
    {/* Detalles del Airdrop */}
    <AirdropDetails />

    {/* Cómo usar la plataforma */}
    <HowToUsePlatform />

     {/* Diseño del Elfi Liquidity Pool */}
     <ElfiLiquidityPool />

    {/* Ventajas del Token */}
    <TokenBenefits />

  </>
);

export default AirdropFarming;