import React from "react";
import Board from "./Board";

const Boards = ({
  sf,
  iic,
  chat,
  museum,
  font,
  chatModel,
  sfModel,
  mfModel,
  fsModel,
  iicModel,
  eventsModel,
  loginModel,
}) => {
  sfModel.scene.position.y = 0.1;
  sfModel.scene.position.x = 0;
  sfModel.scene.position.z = 0;
  sfModel.scene.scale.x = 3;
  sfModel.scene.scale.y = 3;
  sfModel.scene.scale.z = 3;

  chatModel.scene.position.y = 0.1;
  chatModel.scene.position.x = 0;
  chatModel.scene.position.z = -2;
  chatModel.scene.scale.x = 2;
  chatModel.scene.scale.y = 1.8;
  chatModel.scene.scale.z = 2;
  chatModel.scene.rotation.y = Math.PI / 2;

  mfModel.scene.position.y = 0.1;
  mfModel.scene.position.x = 5;
  mfModel.scene.position.z = 18;
  mfModel.scene.scale.x = 0.7;
  mfModel.scene.scale.y = 0.7;
  mfModel.scene.scale.z = 0.7;
  mfModel.scene.rotation.y = -Math.PI - Math.PI / 3;

  fsModel.scene.position.y = 0.1;
  fsModel.scene.position.x = 5;
  fsModel.scene.position.z = -18;
  fsModel.scene.scale.x = 0.7;
  fsModel.scene.scale.y = 0.7;
  fsModel.scene.scale.z = 0.7;
  fsModel.scene.rotation.y = Math.PI / 3;

  iicModel.scene.position.y = 0.1;
  iicModel.scene.position.x = 0;
  iicModel.scene.position.z = 0;
  iicModel.scene.scale.x = 1;
  iicModel.scene.scale.y = 1;
  iicModel.scene.scale.z = 1;
  iicModel.scene.rotation.y = Math.PI / 2;

  eventsModel.scene.position.y = 0.1;
  eventsModel.scene.position.x = 5;
  eventsModel.scene.position.z = -18;
  eventsModel.scene.scale.x = 0.7;
  eventsModel.scene.scale.y = 0.7;
  eventsModel.scene.scale.z = 0.7;
  eventsModel.scene.rotation.y = Math.PI / 3;

  loginModel.scene.position.y = 0.1;
  loginModel.scene.position.x = 5;
  loginModel.scene.position.z = 18;
  loginModel.scene.scale.x = 0.7;
  loginModel.scene.scale.y = 0.7;
  loginModel.scene.scale.z = 0.7;
  loginModel.scene.rotation.y = -Math.PI - Math.PI / 3;

  return (
    <>
      <Board
        map={sf}
        x={-120}
        z={-10}
        text="Social Freaks"
        font={font}
        model={sfModel}
        modelLeft={mfModel}
        modelRight={fsModel}
      />
      <Board
        map={iic}
        x={-60}
        z={-40}
        text="IIC DCRUST"
        rotation={[0, Math.PI, 0]}
        font={font}
        model={iicModel}
        modelRight={eventsModel}
        modelLeft={loginModel}
      />
      <Board
        map={chat}
        x={-120}
        z={-70}
        text="Chat App"
        font={font}
        model={chatModel}
      />
      <Board
        map={museum}
        x={-60}
        z={-135}
        text="Museum Counsel"
        rotation={[0, Math.PI, 0]}
        font={font}
        // chatModel={chatModel}
      />
    </>
  );
};

export default Boards;
