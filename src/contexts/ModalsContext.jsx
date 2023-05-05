import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const ModalsContext = createContext({
  contributionModal: {},
  setContributionModal: () => {},
  loanModal: {},
  setLoanModal: () => {},
  usersModal: {},
  setUsersModal: () => {},
  contributionId: {},
  setContributionId: () => {},
  loanId: {},
  setLoanId: () => {},
  usersId: {},
  setUsersId: () => {},
  userLoanId: {},
  setUserLoanId: () => {},
  userLoanModal: {},
  setUserLoanModal: () => {},
  withdrawalModal: {},
  setWithdrawalModal: () => {},
  withdrawalId: {},
  setWithdrawalId: () => {},
});

export const ModalsProvider = ({ children }) => {
  ModalsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [contributionModal, setContributionModal] = useState(false);
  const [loanModal, setLoanModal] = useState(false);
  const [usersModal, setUsersModal] = useState(false);
  const [contributionId, setContributionId] = useState("");
  const [loanId, setLoanId] = useState("");
  const [usersId, setUsersId]=useState("")
  const [userLoanId, setUserLoanId]=useState("")
  const [userLoanModal,setUserLoanModal]=useState(false)
  const [withdrawlId, setWithdrawalId] = useState("");
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  useEffect(() => console.log("mod", contributionModal), []);

  const value = {
    contributionModal,
    setContributionModal,
    setLoanModal,
    loanModal,
    usersModal,
    setUsersModal,
    contributionId,
    setContributionId,
    loanId,
    setLoanId,
    usersId,
    setUsersId,
    userLoanId,
    setUserLoanId,
    userLoanModal,
    setUserLoanModal,
    withdrawalModal,
    setWithdrawalModal,
    withdrawlId,
    setWithdrawalId
    
  };
  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
