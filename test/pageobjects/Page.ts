export type WebElement = WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>;

export class Page {
	open (path) {
	  browser.url(path)
	}
  }
  
