import React, { Component } from "react";
import { DraftailEditor } from "draftail";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.changeState = this.changeState.bind(this);
  }
  changeState(state) {
    this.setState({
      editorState: state,
    });
  }

  render() {
    return (
      <div>
        <h1>raft editor here!!</h1>
        <DraftailEditor
          editorState={this.state.editorState}
          onChange={this.changeState}
          placeholder="Tell your story..."
          plugins={plugins}
        />
        <InlineToolbar />
        <SideToolbar />
      </div>
    );
  }
}

export default Draft;
