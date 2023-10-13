/* eslint-disable react/prop-types */

export const MultiSelectTags = ({ options, selectedTags, onSelectTag }) => {
  const isTagSelected = (tag) =>
    selectedTags?.some((selectedTag) => selectedTag.id === tag.id);

  const handleTagClick = (tag) => {
    const updatedTags = isTagSelected(tag)
      ? selectedTags?.filter((selectedTag) => selectedTag.id !== tag.id)
      : [...selectedTags, tag];

    onSelectTag(updatedTags);
  };

  return (
    <>
      {options?.map((tag) => (
        <p
          key={tag.id}
          style={{
            color: isTagSelected(tag) ? "#010886" : "#666161",
          }}
          onClick={() => handleTagClick(tag)}
          className="p-[0.5rem] flex items-center  gap-2 cursor-pointer"
        >
          <input
            readOnly
            type="checkbox"
            name=""
            id=""
            checked={isTagSelected(tag)}
          />
          {tag.title || tag.label || tag.text || tag.area}
        </p>
      ))}
    </>
  );
};
