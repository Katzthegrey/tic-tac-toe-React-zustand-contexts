import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const NameInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 600;
  text-align: center;
  width: 100%;
  max-width: 120px;
  outline: none;
  padding: 2px 4px;
`;

const EditButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  font-size: 0.75rem;
  padding: 2px;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${NameWrapper}:hover & {
    opacity: 1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EditableName = ({ name, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);
  
  const handleSave = () => {
    if (editValue.trim()) {
      onSave(editValue.trim());
    }
    setIsEditing(false);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditValue(name);
      setIsEditing(false);
    }
  };
  
  if (isEditing) {
    return (
      <NameInput
        ref={inputRef}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        maxLength={15}
      />
    );
  }
  
  return (
    <NameWrapper>
      <span>{name}</span>
      <EditButton onClick={() => setIsEditing(true)} title="Edit name">
        <i className="fas fa-pen"></i>
      </EditButton>
    </NameWrapper>
  );
};

export default EditableName;