import { useState } from "react";

const SIMULATION_DELAY_MS = 1500;

const validatePin = (pin: string) => /^\d{4}$/.test(pin);

export const useChangePin = () => {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);

    if (!validatePin(currentPin)) {
      setError("Текущий PIN должен состоять из 4 цифр");
      return;
    }

    if (!validatePin(newPin)) {
      setError("Новый PIN должен состоять из 4 цифр");
      return;
    }

    if (newPin !== confirmPin) {
      setError("Новый PIN и подтверждение не совпадают");
      return;
    }

    if (newPin === currentPin) {
      setError("Новый PIN должен отличаться от текущего");
      return;
    }

    setIsLoading(true);
    try {
      // Имитация запроса
      await new Promise((resolve) => setTimeout(resolve, SIMULATION_DELAY_MS));
      setSuccess("PIN-код успешно изменён!");
      setCurrentPin("");
      setNewPin("");
      setConfirmPin("");
    } catch {
      setError("Неожиданная ошибка. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentPin,
    setCurrentPin,
    newPin,
    setNewPin,
    confirmPin,
    setConfirmPin,
    error,
    success,
    isLoading,
    handleSubmit,
  };
};