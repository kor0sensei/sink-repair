import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                requests.map(
                      (request) => `<li class="choice-list-item request--list-item">
                        <input type="radio" value="${request.id}" name="request"> ${request.description}
                        <div class="price">Price: $${request.price}</div>
                      </li>`).join("")
            }
        </ul>
    `

    return html
}