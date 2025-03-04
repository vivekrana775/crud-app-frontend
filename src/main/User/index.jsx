import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import { Box, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { SettingsIconSvg } from "../../assets/icons/SettingsIconSvg";
import { LogoutIconSvg } from "../../assets/icons/LogoutIconSvg";
import { UserIconSvg } from "../../assets/icons/UserIconSvg";
import { PurchaseIconSvg } from "../../assets/icons/PurchaseIconSvg";
import { useGlobalContext } from "../../App";

const User = ({ className }) => {
  // const [userDetails, setUserDetails] = useState("");
  const { userDetails, setUserDetails } = useGlobalContext();
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const LOGOUT = "Log out";
  const items = [
    {
      menu: [
        {
          title: LOGOUT,
          icon: <LogoutIconSvg />,
        },
      ],
    },
  ];

  useEffect(() => {
    const details = Cookies.get("user");
    if (details && details !== "undefined") {
      const user = JSON.parse(details);
      setUserDetails(user?.user);
    }
  }, []);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.user, className, {
          [styles.active]: visible,
        })}
      >
        <button
          className={styles.headUser}
          onMouseEnter={() => setVisible(true)}
          onMouseDown={() => setVisible(false)}
          onClick={() => setVisible(!visible)}
        >
          <Box
            sx={{
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.head}
          >
            {userDetails?.avatar || userDetails?.secondaryAvatar ? (
              <img
                src={userDetails?.avatar || userDetails?.secondaryAvatar}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "40px",
                  height: "40px",
                }}
                alt="Profile"
                height="100%"
                width="100%"
              ></img>
            ) : (
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#aaa8a8",
                  borderRadius: "50%",
                }}
              >
                <UserIconSvg width="24px" height="24px" />
              </Box>
            )}
          </Box>
        </button>

        <Box onMouseLeave={() => setVisible(false)} className={styles.body}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "600",
              }}
              color="#FFFFFF"
            >
              {userDetails?.firstName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "400",
                color: "#7F7F7F",
                display: "flex",
                flexWrap: "wrap !important",
              }}
              color="#FFFFFF"
            >
              {userDetails?.email}
            </Typography>
          </Box>

          {/* *****Seperator***** */}
          <Box
            sx={{
              flex: 1,
              height: "1px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              mt: "16px",
              mb: "16px",
            }}
          />
          {items?.map((item, index) => {
            return (
              <Box className={styles.menu} key={index}>
                {item?.menu?.map((x, i) => {
                  return x.url ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      {x?.icon && x?.icon}
                      <NavLink
                        className={cn(styles.item, {
                          [styles.color]: x.color,
                          [styles.active]: pathname === x.url,
                        })}
                        to={x.url}
                        onClick={() => {
                          setVisible(false);
                        }}
                        key={i}
                      >
                        {x.title}
                      </NavLink>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      {x?.icon && x?.icon}
                      <Typography
                        className={cn(styles.item, {
                          [styles.color]: x.color,
                        })}
                        variant="body1"
                        sx={{
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                        color="#FFFFFF"
                        onClick={() => {
                          if (x.title === LOGOUT) {
                            localStorage.removeItem("jstoken");
                            Cookies.remove("jstoken");
                            Cookies.remove("user");
                            window.location.replace("/");
                          }
                        }}
                      >
                        {x.title}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
