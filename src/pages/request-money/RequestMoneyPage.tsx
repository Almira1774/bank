import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useTranslation } from "react-i18next";
import styles from "./RequestMoneyPage.module.css";
import { RequestMoneyForm } from "@/features/request-money/ui/RequestMoneyForm.tsx";
import { useAppSelector } from "@/shared/hooks/hooksReducer.ts";

const RequestMoneyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.bank.user);

  const handleSucces = () => navigate(-1);

  const initialData = user
    ? {
      fullName: user.fullName || "",
      email: user.email || "",
      description: user.fullName || "",
      monthlyDueBy: [],
    }
    : undefined;

  return (
    <div className={styles.RequestMoneyPage}>
      <div className={styles.header}>
        <IconButton
          className={styles.backButton}
          onClick={() => navigate(-1)}
          sx={{ width: 42, height: 42, backgroundColor: "var(--color-item-bg)" }}
        >
          <ArrowBackIosNewOutlinedIcon
            className={styles.icon}
            sx={{ fill: "#1e1e2d", width: 18 }}
          />
        </IconButton>
        <h1 className={styles.title}>{t("requestMoney.title")}</h1>
        <div className={styles.placeholder} />
      </div>

      <RequestMoneyForm onSucces={handleSucces} initialData={initialData} />
    </div>
  );
};

export default RequestMoneyPage;