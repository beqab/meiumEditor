import React, { Component } from "react";

import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
} from "@draft-js-plugins/buttons";

import createVideoPlugin from "@draft-js-plugins/video";

import createSideToolbarPlugin from "@draft-js-plugins/side-toolbar";
import editorStyles from "./style/editorStyles.module.scss";
import buttonStyles from "./style/buttonStyles.module.scss";
import toolbarStyles from "./style/toolbarStyles.module.scss";
import blockTypeSelectStyles from "./style/blockTypeSelectStyles.module.scss";

import VideoAdd from "./plugins/video";

// Setting the side Toolbar at right position(default is left) and styling with custom theme
const sideToolbarPlugin = createSideToolbarPlugin({
  position: "left",
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
});
const videoPlugin = createVideoPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin, videoPlugin];
const text =
  "Once you click into the text field the sidebar plugin will show up …";

export default class CustomSideToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
    openVideo: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      editorState: createEditorStateWithText(text),
    });
  }

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <SideToolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div>
                  <HeadlineOneButton {...externalProps} />

                  {/* <HeadlineTwoButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} /> */}
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      this.setState({
                        openVideo: true,
                      });
                    }}
                  >
                    <img width={30} src="/img/merge.png" />
                  </div>
                </div>
              )
            }
          </SideToolbar>
        </div>
        {this.state.openVideo ? (
          <VideoAdd
            close={() => {
              this.setState({
                openVideo: false,
              });
            }}
            editorState={this.state.editorState}
            onChange={this.onChange}
            modifier={videoPlugin.addVideo}
          />
        ) : null}
      </>
    );
  }
}
