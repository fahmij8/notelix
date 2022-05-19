import { ModalProps } from 'types';

function Modal({ children, id }: ModalProps) {
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-transparent bg-clip-padding rounded-md outline-none text-current">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
