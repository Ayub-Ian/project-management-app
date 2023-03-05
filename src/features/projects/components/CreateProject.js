import React, { useState } from "react";

export default function CreateProject({ showModal, setShowModal }) {

    // const { id } = user


    const [projectData, setProjectData] = useState({
        name : '',
        category : '',
        due_date : '',
        description : '',
        priority : '',
        user_id: ''
    })

    function resetForm() {
        setProjectData({
            name : '',
            category : '',
            due_date : '',
            description : '',
            priority : ''
        })
    }


    function handleChange(e) {
        const {name,value} = e.target
        setProjectData({ ...projectData, 
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(projectData)

        fetch('http://localhost:9292/project/create', {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(projectData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (!data.error) {
                resetForm()
                setShowModal(false)
            }
        })
    }

  
  return (
    <>
      {showModal ? (
        <>
          <div
            className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none"
          >
            <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-min-w-[500px] tw-max-w-3xl">
              {/*content*/}
              <div className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-secondary tw-outline-none focus:tw-outline-none">
                {/*header*/}
                <div className="tw-flex tw-items-center tw-justify-between tw-p-5">
                  <h3 className=" tw-text-2xl tw-text-white">
                    Create project
                  </h3>
                  
                  <button
                    className="tw-p-1 tw-border-0  tw-leading-none  tw-outline-none focus:tw-outline-none"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <p className=" tw-bg-transparent tw-text-white tw-text-2xl tw-w-6 tw-outline-none focus:tw-outline-none">
                      x
                    </p>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="tw-relative tw-px-6 tw-flex tw-flex-col tw-gap-4">
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className=" tw-font-medium">Project name</label>
                        <input type='text' name="name" onChange={handleChange} value={projectData.name} placeholder="Project name" className=" tw-outline-none tw-text-white tw-rounded-lg tw-py-1 tw-pl-3 tw-px-1 placeholder:tw-text-sm tw-bg-transparent tw-border tw-border-grey-100"/>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className=" tw-font-medium">Project type</label>
                        <input type='text' name="category" onChange={handleChange} value={projectData.category} placeholder="Select type" className=" tw-outline-none tw-text-white tw-rounded-lg tw-py-1 tw-pl-3 tw-px-1 placeholder:tw-text-sm tw-bg-transparent tw-border tw-border-grey-100"/>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className=" tw-font-medium">Deadline date</label>
                        <input type='date' name="due_date" onChange={handleChange} value={projectData.date} className=" tw-outline-none tw-text-white tw-rounded-lg tw-py-1 tw-pl-3 tw-px-1 placeholder:tw-text-sm tw-bg-transparent tw-border tw-border-grey-100"/>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className=" tw-font-medium">Description</label>
                        <textarea type='text' name="description" onChange={handleChange} value={projectData.description} placeholder="Description" className=" tw-outline-none tw-text-white tw-rounded-lg tw-py-1 tw-pl-3 tw-px-1 placeholder:tw-text-sm tw-bg-transparent tw-border tw-border-grey-100"/>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                        <label className=" tw-font-medium">Priority</label>
                        <input type='text' name="priority" onChange={handleChange} value={projectData.priority} placeholder="Select priority" className=" tw-outline-none tw-text-white tw-rounded-lg tw-py-1 tw-pl-3 tw-px-1 placeholder:tw-text-sm tw-bg-transparent tw-border tw-border-grey-100"/>
                    </div>
                    </div>
                    {/*footer*/}
                    <div className="tw-flex tw-items-center tw-justify-end tw-p-3 tw-mt-4">
                    <button
                        className="tw-text-red-500 tw-background-transparent tw-font-bold tw-px-6 tw-py-2 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="tw-bg-emerald-500 tw-text-white active:tw-bg-emerald-600 tw-font-medium tw-text-sm tw-px-6 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                        type="submit"
                    >
                        Save
                    </button>
                    </div>
                </form>

              </div>
            </div>
          </div>
          <div className="tw-opacity-50 opac tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
        </>
      ) : null}
    </>
  );
}