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
});

export const ModalsProvider = ({ children }) => {
    ModalsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [contributionModal, setContributionModal]= useState(false)
  const [loanModal, setLoanModal]= useState(false)
  const [usersModal, setUsersModal]= useState(false)
  useEffect(()=>console.log("mod",contributionModal),[])

  const value = { contributionModal, setContributionModal,setLoanModal,loanModal,usersModal,setUsersModal };
  return <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>;
};
