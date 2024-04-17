import React, { useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';


type Props = {
  children: React.ReactNode
}

export type ModalRef = {
  open: () => void;
  close: () => void;
}

const Modal = React.forwardRef<ModalRef, Props>(({ children }, ref) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
      open: () => {
        const dialog = dialogRef.current as HTMLDialogElement;
        dialog.showModal();
      },
      close: () => {
        const dialog = dialogRef.current as HTMLDialogElement;
        dialog.close();
      }
    }));

  return createPortal(
    <dialog ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  )
})
export default Modal;