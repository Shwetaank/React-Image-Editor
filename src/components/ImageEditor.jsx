import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imageEditor.css";

const ImageEditor = () => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (image) {
      const aspectRatio = image.width / image.height;
      const containerWidth = canvas.parentElement.offsetWidth;
      canvas.width = containerWidth;
      canvas.height = containerWidth / aspectRatio;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }, [image]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFetchImage = () => {
    if (url) {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        setImage(img);
      };
      img.src = url;
    }
  };

  const applyFilter = (filter) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.filter = filter;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="container my-4">
      <div className="upload-section text-center mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="form-control mb-2"
        />
        <div className="url-section d-flex flex-column flex-md-row justify-content-center gap-2 w-100">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter image URL"
            className="form-control w-100"
          />
          <div className="d-flex justify-content-center gap-2">
            <button onClick={handleFetchImage} className="btn btn-primary">
              Fetch Image
            </button>
            <button onClick={() => applyFilter("none")} className="btn btn-secondary">
              Reset
            </button>
            <button onClick={saveImage} className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="filters-section text-center mb-4">
        <div className="d-flex flex-wrap gap-2">
          <button onClick={() => applyFilter("grayscale(100%)")} className="btn btn-outline-secondary flex-fill">
            Grayscale
          </button>
          <button onClick={() => applyFilter("sepia(100%)")} className="btn btn-outline-secondary flex-fill">
            Sepia
          </button>
          <button onClick={() => applyFilter("invert(100%)")} className="btn btn-outline-secondary flex-fill">
            Invert
          </button>
          <button onClick={() => applyFilter("blur(5px)")} className="btn btn-outline-secondary flex-fill">
            Blur
          </button>
          <button onClick={() => applyFilter("contrast(200%)")} className="btn btn-outline-secondary flex-fill">
            Contrast
          </button>
          <button onClick={() => applyFilter("brightness(150%)")} className="btn btn-outline-secondary flex-fill">
            Brightness
          </button>
          <button onClick={() => applyFilter("saturate(150%)")} className="btn btn-outline-secondary flex-fill">
            Saturate
          </button>
          <button onClick={() => applyFilter("hue-rotate(90deg)")} className="btn btn-outline-secondary flex-fill">
            Hue Rotate
          </button>
          <button onClick={() => applyFilter("opacity(50%)")} className="btn btn-outline-secondary flex-fill">
            Opacity
          </button>
          <button onClick={() => applyFilter("drop-shadow(5px 5px 5px rgba(0,0,0,0.5))")} className="btn btn-outline-secondary flex-fill">
            Drop Shadow
          </button>
        </div>
      </div>
      <div className="canvas-container d-flex justify-content-center">
        <div className="canvas-wrapper">
          <canvas ref={canvasRef} className="canvas" />
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
