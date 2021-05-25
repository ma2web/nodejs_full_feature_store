import React, { FC, useState } from "react";
import "react-sortable-tree/style.css";
import SortableTree from "react-sortable-tree";
import useStyles from "./GolTree.style";
import FileExplorerTheme from "react-sortable-tree-theme-full-node-drag";

export interface IGolTreeProps {}

const Component: FC<IGolTreeProps> = () => {
  const classes = useStyles({});

  const [searchString, setSearchString] = useState("");
  const [searchFocusIndex, setSearchFocusIndex] = useState(0);
  const [searchFoundCount, setSearchFoundCount] = useState(null);
  const [treeData, setTreeData] = useState([
    { title: "This is the Full Node Drag theme" },
    { title: "You can click anywhere on the node to drag it" },
    {
      title: "This node has dragging disabled",
      subtitle: "Note how the hover behavior is different",
      dragDisabled: true,
    },
    { title: "Chicken", children: [{ title: "Egg" }] },
  ]);

  const updateTreeData = (treeData) => {
    setTreeData(treeData);
  };

  const alertNodeInfo = ({ node, path, treeIndex }) => {
    const objectString = Object.keys(node)
      .map((k) => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
      .join(",\n   ");

    global.alert(
      "Info passed to the icon and button generators:\n\n" +
        `node: {\n   ${objectString}\n},\n` +
        `path: [${path.join(", ")}],\n` +
        `treeIndex: ${treeIndex}`
    );
  };

  const selectPrevMatch = () =>
    setSearchFocusIndex(
      searchFocusIndex !== null
        ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
        : searchFoundCount - 1
    );

  const selectNextMatch = () =>
    setSearchFocusIndex(
      searchFocusIndex !== null ? (searchFocusIndex + 1) % searchFoundCount : 0
    );

  return (
    <div>
      <form
        style={{ display: "inline-block" }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="find-box">
          Search:&nbsp;
          <input
            id="find-box"
            type="text"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
          />
        </label>

        <button
          type="button"
          disabled={!searchFoundCount}
          onClick={selectPrevMatch}
        >
          &lt;
        </button>

        <button
          type="submit"
          disabled={!searchFoundCount}
          onClick={selectNextMatch}
        >
          &gt;
        </button>

        <span>
          &nbsp;
          {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
          &nbsp;/&nbsp;
          {searchFoundCount || 0}
        </span>
      </form>

      <SortableTree
        className={classes.root}
        searchQuery={searchString}
        searchFocusOffset={searchFocusIndex}
        searchFinishCallback={(matches) => {
          setSearchFoundCount(matches.length);
          setSearchFocusIndex(
            matches.length > 0 ? searchFocusIndex % matches.length : 0
          );
        }}
        isVirtualized={false}
        treeData={treeData}
        onChange={(data: any) => setTreeData(data)}
        canDrag={({ node }) => !node.dragDisabled}
        generateNodeProps={(rowInfo) => ({
          buttons: [<button onClick={() => alertNodeInfo(rowInfo)}>i</button>],
        })}
        theme={FileExplorerTheme}
      />
    </div>
  );
};

const argTypes = {};

export const GolTree = Component.bind({});

export default {
  component: GolTree,
  title: "Tree",
  argTypes,
};
