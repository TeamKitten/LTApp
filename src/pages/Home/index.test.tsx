// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { mount } from "enzyme";
import * as React from "react";
import { Home } from ".";
import { CommonStore } from "../../stores/Common";
import { ContentfulStore } from "../../stores/Contentful";

describe("Home Page", () => {
  it("開場している状態であと〜日が表示されない", () => {
    const constantDate = new Date("2019/2/2 13:35");
    Date.now = jest.fn(() => constantDate.getTime());

    const commonStore = new CommonStore();
    commonStore.openDate = new Date("2019/2/2 13:30");
    const contentfulStore = new ContentfulStore();
    const wrapper = mount(
      <Home commonStore={commonStore} contentfulStore={contentfulStore} />
    );
    expect(wrapper.find("#noSessions").length).toBe(1);
  });
  /*
  it("登壇している状態でセッションの情報が表示される", () => {
    const constantDate = new Date("2019/2/2 13:35");
    Date.now = jest.fn(() => constantDate.getTime());

    const commonStore = new CommonStore();
    commonStore.openDate = new Date("2019/2/2 13:30");
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
    const contentfulStore = new ContentfulStore();
    contentfulStore.speakers = [session];

    library.add(faClock);
    library.add(faStopwatch);

    const wrapper = mount(
      <Home commonStore={commonStore} contentfulStore={contentfulStore} />
    );
    expect(wrapper.find("#noSessions").length).toBe(0);
    expect(wrapper.find("#currentSession").length).not.toBe(0);
  });
*/
});
