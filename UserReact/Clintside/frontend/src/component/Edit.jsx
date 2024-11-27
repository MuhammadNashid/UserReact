import React from 'react';
import './Edit.css';

const Edit = () => {
  return (
    <div className="edit-form-container">
      <form>
        <div>
          <img src="" alt="Preview" className="image-preview" />
        </div>
        <input type="file" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default Edit;