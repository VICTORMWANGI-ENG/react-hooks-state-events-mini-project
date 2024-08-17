/** @format */

import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
	// setting our text state
	const [text, setText] = useState("");
	// setting our category state
	const [category, setCategory] = useState("Code");

	//handle submit function

	function handleSubmit(e) {
		// prevent default
		e.preventDefault();
		onTaskFormSubmit({ text, category });
		setText("");
		setCategory("Code");
	}
	return (
		<form className='new-task-form' onSubmit={handleSubmit}>
			<label>
				Details
				<input
					type='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</label>
			<label>
				Category
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}>
					{categories.map((cat) => (
						<option key={cat}>{cat}</option>
					))}
				</select>
			</label>
			<input type='submit' value='Add task' />
		</form>
	);
}

export default NewTaskForm;
