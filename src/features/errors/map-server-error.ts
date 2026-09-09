import type { ToastMessage } from "@/shared/types/error";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import { ToastTypeEnum } from "@/shared/types/enums";

export function mapServerError(
  err: FetchBaseQueryError,
  navigate: ReturnType<typeof useNavigate>
): ToastMessage {
  const status = err.status as number;
  let errorMessage: string | undefined;

  if (err.data && typeof err.data === "object" && "message" in err.data) {
    errorMessage = (err.data as { message?: string }).message;
  }

  if (status >= 500) {
    return {
      type: ToastTypeEnum.Error,
      message: "Сервис временно недоступен. Попробуйте позже.",
    };
  }

  if (status === 401) {
    return {
      type: ToastTypeEnum.Warning,
      message: "Требуется авторизация. Пожалуйста, войдите в аккаунт.",
      action: { label: "Войти", onClick: () => navigate("/login") },
    };
  }

  if (status === 403) {
    return {
      type: ToastTypeEnum.Error,
      message: "У вас нет доступа к этому ресурсу.",
    };
  }

  if (status === 404) {
    return {
      type: ToastTypeEnum.Error,
      message: "Запрашиваемые данные не найдены.",
    };
  }

  if (status === 429) {
    return {
      type: ToastTypeEnum.Warning,
      message: "Слишком много запросов. Подождите немного и попробуйте снова.",
    };
  }

  return {
    type: ToastTypeEnum.Error,
    message: errorMessage || "Произошла ошибка при выполнении запроса.",
  };
}
