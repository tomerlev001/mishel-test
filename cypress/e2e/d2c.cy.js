import { yourAddressPage } from "../support/pageObjects/yourAddress"

describe('template spec', () => {
  beforeEach(() => {
    yourAddressPage.visitYourAddress()
  })

  it('passes', () => {
    const address = '240 9th Ave, New York, NY 10001'
    const city = 'New York'

    yourAddressPage.typeToYourHomeAddressField(address)
    yourAddressPage.clickOnAnItemFromTheAddressDropdown(city)
    yourAddressPage.clickOnTheContinueBtn()
  })
})