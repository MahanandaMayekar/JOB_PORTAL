import { FirstLoginModal } from "../../components/FirstLoginModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../store/register/registerService";

const FirstLogin = () => {
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const [showModal, setShowModal] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const id = user?._id;

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <FirstLoginModal
          onClose={async (categories) => {
            if (!id) return;
            const result = await updateUser({
              id,
              updateData: {
                isFirstLogin: false,
                interestedCategories: categories,
              },
            });

            const updatedUser = { id, ...result.data };
            console.log("user first time", updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));

            setShowModal(false);
            navigate("/dashboard");
          }}
        />
      )}
    </>
  );
};

export default FirstLogin;
