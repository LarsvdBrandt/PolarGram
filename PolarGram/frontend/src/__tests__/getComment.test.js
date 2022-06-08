import {
    getByTestId,
    render,
    screen,
    waitFor,
    fireEvent,
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
        render(
            <MemoryRouter initialEntries={["/PolaroidPage/62a093218243efcbe2ceb937"]}>
                <PolaroidPage />
            </MemoryRouter>
        );

        const header = await screen.findByText("User: test");
        expect(header).toBeInTheDocument();

    });
});