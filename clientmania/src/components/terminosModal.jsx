import { useState } from "react";

export function TermsModal({ text, onAccept }) {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    onAccept();
    setOpen(false);
  };

  return (
    <>
      {/* Enlace que abre el modal */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="text-blue-600 hover:underline"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Leer Términos y Condiciones
      </a>

      {/* Overlay y modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-lg max-w-lg w-full p-6 max-h-[80vh] overflow-auto shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              Términos y Condiciones
            </h2>
            <div className="text-sm leading-relaxed whitespace-pre-line text-black">
              {text}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={handleAccept}
                className="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
