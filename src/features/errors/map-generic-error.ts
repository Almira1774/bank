import type { ToastMessage } from "@/shared/types/error";
import type { SerializedError } from "vitest";
import { ToastTypeEnum } from "@/shared/types/enums";

export function mapGenericError(err: SerializedError): ToastMessage {
  const msg = err.message || String(err);

  if (msg.includes("ECONNRESET") || msg.includes("network") || msg.includes("timeout")) {
    return {
      type: ToastTypeEnum.Error,
      message: "Нет соединения с сервером. Проверьте интернет и повторите попытку.",
    };
  }

  return {
    type: ToastTypeEnum.Error,
    message: "Что-то пошло не так. Попробуйте ещё раз.",
  };
}
