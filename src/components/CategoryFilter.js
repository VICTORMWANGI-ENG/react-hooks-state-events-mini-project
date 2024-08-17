/** @format */

import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
	const categoryBtn = categories.map((category) => {
		const className = category === selectedCategory ? "selected" : null;
		return (
			<button
				key={category}
				className={className}
				onClick={() => onSelectCategory(category)}>
				{category}
			</button>
		);
	});
	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{categoryBtn}
		</div>
	);
}

export default CategoryFilter;
