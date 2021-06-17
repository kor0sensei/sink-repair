import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                requests.map(
                      (request) => `<li class="choice-list-item request--list-item">
                        <input type="hidden" value="${request.id}" name="request"> ${request.description}
                        <button class="request__delete" id="request--${request.id}">Delete</button>
                      </li>`).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
