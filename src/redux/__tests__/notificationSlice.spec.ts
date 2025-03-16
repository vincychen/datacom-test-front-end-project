import notificationReducer, {
  showNotification,
  hideNotification,
} from "../../redux/notificationSlice";
import { Variant } from "react-bootstrap/esm/types";

describe("notificationSlice", () => {
  const initialState = {
    message: "",
    type: "info" as Variant,
    isVisible: false,
    dismissible: false,
    dismissAfter: 8,
  };

  it("should handle initial state", () => {
    expect(notificationReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle showNotification", () => {
    const actual = notificationReducer(
      initialState,
      showNotification({
        message: "Test message",
        type: "success",
        dismissible: true,
        dismissAfter: 5,
      })
    );
    expect(actual.message).toEqual("Test message");
    expect(actual.type).toEqual("success");
    expect(actual.isVisible).toEqual(true);
    expect(actual.dismissible).toEqual(true);
    expect(actual.dismissAfter).toEqual(5);
  });

  it("should handle hideNotification", () => {
    const actual = notificationReducer(
      {
        message: "Test message",
        type: "success",
        isVisible: true,
        dismissible: true,
        dismissAfter: 5,
      },
      hideNotification()
    );
    expect(actual).toEqual(initialState);
  });
});
