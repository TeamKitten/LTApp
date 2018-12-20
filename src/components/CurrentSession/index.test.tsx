import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { shallow } from "enzyme";
import * as React from "react";
import { CurrentSession } from ".";

describe("CurrentSession Component", () => {
  it("登壇している状態でセッションの情報が表示される(5min)", () => {
    const session = JSON.parse(
      `{
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "dv2s5i251t5w"
            }
          },
          "id": "3NDUgPhNTiAcioISSYyGKa",
          "type": "Entry",
          "createdAt": "2018-12-19T09:37:19.935Z",
          "updatedAt": "2018-12-19T09:37:19.935Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "contentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "speaker"
            }
          },
          "locale": "en-US"
        },
        "fields": {
          "avatar": {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "dv2s5i251t5w"
                }
              },
              "id": "hMNe1v3jxYgG6YGGQiQYO",
              "type": "Asset",
              "createdAt": "2018-12-19T09:36:16.169Z",
              "updatedAt": "2018-12-19T09:36:49.541Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 2,
              "locale": "en-US"
            },
            "fields": {
              "title": "toyokappa",
              "description": "",
              "file": {
                "url": "//images.ctfassets.net/dv2s5i251t5w/hMNe1v3jxYgG6YGGQiQYO/e36af98de904d4747db0e8b8026d2291/22310192_1452810584803302_8775985888730463853_n.jpg",
                "details": {
                  "size": 73102,
                  "image": {
                    "width": 960,
                    "height": 960
                  }
                },
                "fileName": "22310192_1452810584803302_8775985888730463853_n.jpg",
                "contentType": "image/jpeg"
              }
            }
          },
          "speakerName": "toyokappa",
          "title": "未定",
          "long": false,
          "time": "2019-02-02T13:30+09:00"
        }
      }`
    );

    library.add(faClock);
    library.add(faStopwatch);

    const wrapper = shallow(<CurrentSession currentSession={session} />);
    expect(wrapper.find("#title").text()).toBe("未定");
    expect(wrapper.find("#speakerName").text()).toBe("toyokappa");
    expect(wrapper.find("#speakTime").text()).toBe("13:30-13:35");
    expect(wrapper.find("#speakDuration").text()).toBe("5min");
  });

  it("登壇している状態でセッションの情報が表示される(10min)", () => {
    const session = JSON.parse(
      `{
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "dv2s5i251t5w"
            }
          },
          "id": "3NDUgPhNTiAcioISSYyGKa",
          "type": "Entry",
          "createdAt": "2018-12-19T09:37:19.935Z",
          "updatedAt": "2018-12-19T09:37:19.935Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "contentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "speaker"
            }
          },
          "locale": "en-US"
        },
        "fields": {
          "avatar": {
            "sys": {
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "dv2s5i251t5w"
                }
              },
              "id": "hMNe1v3jxYgG6YGGQiQYO",
              "type": "Asset",
              "createdAt": "2018-12-19T09:36:16.169Z",
              "updatedAt": "2018-12-19T09:36:49.541Z",
              "environment": {
                "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
                }
              },
              "revision": 2,
              "locale": "en-US"
            },
            "fields": {
              "title": "toyokappa",
              "description": "",
              "file": {
                "url": "//images.ctfassets.net/dv2s5i251t5w/hMNe1v3jxYgG6YGGQiQYO/e36af98de904d4747db0e8b8026d2291/22310192_1452810584803302_8775985888730463853_n.jpg",
                "details": {
                  "size": 73102,
                  "image": {
                    "width": 960,
                    "height": 960
                  }
                },
                "fileName": "22310192_1452810584803302_8775985888730463853_n.jpg",
                "contentType": "image/jpeg"
              }
            }
          },
          "speakerName": "toyokappa",
          "title": "未定",
          "long": true,
          "time": "2019-02-02T13:30+09:00"
        }
      }`
    );

    library.add(faClock);
    library.add(faStopwatch);

    const wrapper = shallow(<CurrentSession currentSession={session} />);
    expect(wrapper.find("#title").text()).toBe("未定");
    expect(wrapper.find("#speakerName").text()).toBe("toyokappa");
    expect(wrapper.find("#speakTime").text()).toBe("13:30-13:40");
    expect(wrapper.find("#speakDuration").text()).toBe("10min");
  });
});
