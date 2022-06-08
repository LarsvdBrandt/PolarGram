import {
    getByTestId,
    render,
    screen,
    waitFor,
    fireEvent,
    cleanup
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PolaroidPost from "../components/PolaroidPost.js";
import PolaroidPage from "../components/PolaroidPage.js";
import React from "react";
import MockImage from "../testimg/img1.PNG";
import {
    useAuth0
} from '@auth0/auth0-react';


const user = {
    email: "johndoe@me.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
};

afterEach(cleanup);

jest.mock("@auth0/auth0-react");

describe("Post component tests", () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
    });

    it("Test render", async () => {

        /*
        render(
            <MemoryRouter initialEntries={["/PolaroidPage/6295e41ecd2ed7deaf58631b"]}>
                <PolaroidPage />
            </MemoryRouter>
        );

        await waitFor(() =>
            expect(screen.queryByTestId("comment-input-string")).toBeInTheDocument()
        );

        const commentValue = "testDeleteComment"

        const inputComment = screen.queryByTestId("comment-input-string");
        fireEvent.change(inputComment, { target: { value: commentValue } });
        expect(inputComment.value).toBe(commentValue);

        const inputSubmit = screen.queryByTestId("comment-input-submit");
        fireEvent.click(inputSubmit);
        // const header = await screen.findByText("Image:");
        // expect(header).toBeInTheDocument();
        */

        render(
            <MemoryRouter initialEntries={["/PolaroidPage/62a093218243efcbe2ceb937"]}>
                <PolaroidPage />
            </MemoryRouter>
        );
        const commentValue = "testDeleteComment"
        //const headerComment = await screen.findByText("User: " + commentValue);
        //expect(headerComment).toBeInTheDocument();



        //const deleteInput = await screen.findByText(commentValue);
        const deleteInput = screen.queryByTestId("comment-delete-input");
        //expect(deleteInput).toBeInTheDocument();
        await fireEvent.click(deleteInput);

        render(
            <MemoryRouter initialEntries={["/PolaroidPage/62a093218243efcbe2ceb937"]}>
                <PolaroidPage />
            </MemoryRouter>
        );

        const header = screen.findByText("User: " + commentValue);
    });
});