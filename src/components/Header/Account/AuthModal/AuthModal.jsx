import './AuthModal.css';

export const AuthModal = ({ setIsOpen }) => {
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>Dialog</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className='modalContent'>
            <h1>Auth</h1>
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className='cancelBtn'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );}

