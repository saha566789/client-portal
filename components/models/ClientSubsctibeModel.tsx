"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";

const ClientSubscribeModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { onOpenChange } = useDisclosure();
  
  return (
    <div>
      <Modal
        size="md"
        backdrop="blur"
        isOpen={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setOpen(false);
          }
          onOpenChange();
        }}
      >
        <ModalContent>
          <ModalBody>
            <div className="space-y-3 p-5 flex flex-col justify-center items-center text-center">
              <FaCheckCircle className="text-7xl text-green-500 text-center" />
              <p className="font-semibold">
                Your Email request has been sent successfully!
              </p>
              <p>We will get back to you soon!</p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ClientSubscribeModal;
