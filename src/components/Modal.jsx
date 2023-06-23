import React from "react";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { StLargeButton, StSmallButton } from "./Button";

function Modal() {
  const [OneModalOpen, setOneModalOpen] = useState(false);
  const [TwoModalOpen, setTwoModalOpen] = useState(false);

  return (
    <div>
      <h1>Modal</h1>
      <div>
        <StSmallButton color="#81F79F" onClick={() => setOneModalOpen(true)}>
          open modal
        </StSmallButton>
        <StLargeButton
          borderColor="#F7BE81"
          onClick={() => setTwoModalOpen(true)}
        >
          open modal
        </StLargeButton>
        {OneModalOpen && <FirstModal setOneModalOpen={setOneModalOpen} />}
        {TwoModalOpen && <SecondModal setTwoModalOpen={setTwoModalOpen} />}
      </div>
    </div>
  );
}

function FirstModal({ setOneModalOpen }) {
  const closeModal = () => {
    setOneModalOpen(false);
  };

  return (
    <StModal>
      <p>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
      </p>
      <StModalButton>
        <StSmallButton color="#F7BE81" onClick={closeModal}>
          닫기
        </StSmallButton>
        <StSmallButton color="#81F79F">확인</StSmallButton>
      </StModalButton>
    </StModal>
  );
}

function SecondModal({ setTwoModalOpen }) {
  const closeModal = () => {
    setTwoModalOpen(false);
  };
  // 모달 외부영역 클릭 시 구현 중
  useEffect(() => {
    console.log("외부영역 클릭");
    // setTwoModalOpen(false);
  });

  return (
    <StModal>
      <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
      <StModalButton>
        <StSmallButton color="#F7BE81" onClick={closeModal}>
          닫기
        </StSmallButton>
      </StModalButton>
    </StModal>
  );
}

const StModal = styled.div`
  width: 500px;
  height: 300px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
`;

const StModalButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

export default Modal;
