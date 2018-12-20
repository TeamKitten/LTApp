import { shallow } from "enzyme";
import * as React from "react";
import { Speakers } from ".";

describe("Speakers Page", () => {
  it("全員分のセッションが表示される", () => {
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
    const wrapper = shallow(<Speakers speakers={[session, session]} />);
    expect(wrapper.find(".session").length).toBe(2);
  });
});
