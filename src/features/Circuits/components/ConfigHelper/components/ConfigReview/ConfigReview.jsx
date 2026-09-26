import React from 'react';
import { useSelector } from 'react-redux';
import {
  Mkt5009BridgedPrivate,
  Mkt5009BridgedPrivateTP,
  MktCCRBridgedPrivate,
  Mkt5009RoutedSwitchSub,
  Mkt5009RoutedTPSub,
  Mkt5009RoutedSwitchSubSFP,
  Mkt5009RoutedTPSubSFP,
  MktCCRRoutedSwitchSub,
  Mkt5009RoutedVDHCPVB,
  Mkt5009RoutedVDHCPVBTP,
  Mkt5009RoutedVDHCPVBF,
  Mkt5009RoutedVDHCPVBTPF,
  MktCCRRoutedLB,
  MktCCRRoutedVDHCPVB,
  CoxMkt5009BridgedPrivate,
  CoxMkt5009BridgedPrivateTP,
  CoxMktCCRBridgedPrivate,
  NoMatch,
} from './templates';
import './review.scss';

const ConfigReview = () => {
  const {
    carrier,
    handoffType,
    circuitType,
    measurement,
    isTagged,
    tpLink,
    ipTemplate,
  } = useSelector((state) => state.circuit);

  let configDisplay;

  const coxCircuits = ['Cox Coax', 'Cox Fiber'];

  const configViews = () => {
    const isTaggedBool = isTagged === 'yes';
    const tpLinkBool = tpLink === 'yes';

    const keyByCircuit = {
      dia: `${measurement}_${tpLinkBool}`,
      nni: `${measurement}_${isTaggedBool}_${tpLinkBool}`,
    };

    const views = {
      dia: {
        copper: {
          M_false: <Mkt5009BridgedPrivate />,
          M_true: <Mkt5009BridgedPrivateTP />,

          G_false: <MktCCRBridgedPrivate />,
          G_true: <MktCCRBridgedPrivate />,
        },
        fiber: {
          G_false: <MktCCRBridgedPrivate />,
          G_true: <MktCCRBridgedPrivate />,
        },
      },

      nni: {
        copper: {
          M_false_false: <Mkt5009RoutedVDHCPVB />, //
          M_false_true: <Mkt5009RoutedVDHCPVBTP />, //
          M_true_false: <Mkt5009RoutedSwitchSub />, //
          M_true_true: <Mkt5009RoutedTPSub />,

          G_false_false: <MktCCRRoutedLB />,
          G_false_true: <MktCCRRoutedVDHCPVB />,
          G_true_false: <MktCCRRoutedSwitchSub />,
        },
        fiber: {
          M_false_false: <Mkt5009RoutedVDHCPVBF />,
          M_false_true: <Mkt5009RoutedVDHCPVBTPF />,
          M_true_false: <Mkt5009RoutedSwitchSubSFP />,
          M_true_true: <Mkt5009RoutedTPSubSFP />,

          G_false_false: <MktCCRRoutedLB />,
          G_false_true: <MktCCRRoutedVDHCPVB />,
          G_true_false: <MktCCRRoutedSwitchSub />,
        },
      },
    };

    return (
      views?.[circuitType]?.[handoffType]?.[keyByCircuit[circuitType]] ?? (
        <NoMatch />
      )
    );
  };

  const coxCofigViews = () => {
    const isTaggedBool = isTagged === 'yes';
    const tpLinkBool = tpLink === 'yes';

    const keyByCircuit = {
      dia: `${measurement}_${tpLinkBool}`,
      nni: `${measurement}_${isTaggedBool}_${tpLinkBool}`,
    };

    const views = {
      dia: {
        copper: {
          M_false: <CoxMkt5009BridgedPrivate />,
          M_true: <CoxMkt5009BridgedPrivateTP />,

          G_false: <CoxMktCCRBridgedPrivate />,
          G_true: <CoxMktCCRBridgedPrivate />,
        },
        fiber: {
          G_false: <CoxMktCCRBridgedPrivate />,
          G_true: <CoxMktCCRBridgedPrivate />,
        },
      },

      nni: {
        copper: {
          M_false_false: <Mkt5009RoutedVDHCPVB />, //
          M_false_true: <Mkt5009RoutedVDHCPVBTP />, //
          M_true_false: <Mkt5009RoutedSwitchSub />, //
          M_true_true: <Mkt5009RoutedTPSub />,

          G_false_false: <MktCCRRoutedLB />,
          G_false_true: <MktCCRRoutedVDHCPVB />,
          G_true_false: <MktCCRRoutedSwitchSub />,
        },
        fiber: {
          M_false_false: <Mkt5009RoutedVDHCPVBF />,
          M_false_true: <Mkt5009RoutedVDHCPVBTPF />,
          M_true_false: <Mkt5009RoutedSwitchSubSFP />,
          M_true_true: <Mkt5009RoutedTPSubSFP />,

          G_false_false: <MktCCRRoutedLB />,
          G_false_true: <MktCCRRoutedVDHCPVB />,
          G_true_false: <MktCCRRoutedSwitchSub />,
        },
      },
    };

    return (
      views?.[circuitType]?.[handoffType]?.[keyByCircuit[circuitType]] ?? (
        <NoMatch />
      )
    );
  };

  if (coxCircuits.includes(carrier)) {
    configDisplay = coxCofigViews();
  } else {
    configDisplay = configViews();
  }

  return (
    <div id='config-review'>
      <section>
        {circuitType === 'dia' ? (
          <div className='ip-temp'>
            <h3>DIA Template</h3>
            <pre>
              <p className='ip-details'>
                {`Network: ${ipTemplate?.network}
								Verve Router: ${ipTemplate?.verveRouter}
								Available IP(s): ${ipTemplate?.available}
								Subnet Mask: ${ipTemplate?.subnetMask}
								Gateway: ${ipTemplate?.gateway}
								DNS Primary: ${ipTemplate?.dnsP}
								DNS Secondary: ${ipTemplate?.dnsS}`}
              </p>
            </pre>
          </div>
        ) : (
          circuitType === 'nni' && (
            <div className='ip-temp'>
              <h3>NNI Template</h3>
              <pre>
                <p className='ip-details'>
                  {`Network: ${ipTemplate?.wanNetwork}
								Core/Verve Gateway: ${ipTemplate?.coreVerveGateway}
								Verve Router WAN: ${ipTemplate?.verveRouterWan}
								Subnet Mask: ${ipTemplate?.wanMask}
								
								Network: ${ipTemplate?.lanNetwork}
								Verve Router LAN/Client Gateway: ${ipTemplate?.clientGateway}
								Available IP(s): ${ipTemplate?.available}
								Subnet Mask: ${ipTemplate?.lanMask}
								DNS Primary: ${ipTemplate?.dnsP}
								DNS Secondary: ${ipTemplate?.dnsS}`}
                </p>
              </pre>
            </div>
          )
        )}
      </section>
      <section>{configDisplay}</section>
    </div>
  );
};

export default ConfigReview;
