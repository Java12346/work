

const MovieCard = () => {
  return (
    <div className="post" style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',
        borderRadius: '15px'
    }}>
        <div className="post_image"
            style={{
                background: `red`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '200px',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}
        >
            <div className="creator">
                <h4 style={{ marginBottom: '10px' }}>Mark</h4>
                <p>2 months ago</p>
            </div>
            <div className="edit">
                <p>...</p>
            </div>
        </div>
        <div className='desc' style={{ padding: '20px' }}>
            <p>#china #australia</p>
            <h5 style={{ marginTop: '15px' }}>Visisted the escape room</h5>
            <div className='action' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button>like</button>
                <button>delete</button>
            </div>
        </div>
    </div>
  );
}

export default MovieCard;