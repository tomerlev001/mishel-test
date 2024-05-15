class YourAddressPage {
    // Variables
    url = "https://d2cinterview.bolttest.com/organic-pl/your-address"

    // Elements
    yourHomeAddressField() {
        return cy.get('[id="addressAutoComplete"]')
    }

    addressDropdown() {
        return cy.get('.pac-container')
    }

    continueBtn() {
        return cy.get('[data-automation-data="your-address"]')
    }
    // Actions
    visitYourAddress() {
        cy.visit(this.url)
    }

    typeToYourHomeAddressField(address) {
        this.yourHomeAddressField().type(address)
    }

    clickOnAnItemFromTheAddressDropdown(text) {
        this.addressDropdown().contains(text).click()
    }

    clickOnTheContinueBtn() {
        this.continueBtn().click()
    }
    // Assertions
}

export const yourAddressPage = new YourAddressPage()