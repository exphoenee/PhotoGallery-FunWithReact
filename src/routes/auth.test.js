import { permission } from "./RequireAuth";

const testSteps = [
  {
    desc: "if user is not loged in, and it is not give that is required the result should be true",
    user: false,
    required: undefined,
    res: true,
  },
  {
    desc: "if user is loged in, and itsn't required the result should be true",
    user: true,
    required: false,
    res: true,
  },
  {
    desc: "if user is not loged in, and it isn't required the result should be true",
    user: false,
    required: false,
    res: true,
  },
  {
    desc: "if user is not loged in, but it is required the result should be false",
    user: false,
    required: true,
    res: false,
  },
  {
    desc: "if user is loged in, and it is required the result should be true",
    user: true,
    required: true,
    res: true,
  },
];

testSteps.forEach(({ user, required, desc, res }) => {
  it(desc, () => {
    expect(permission(user, required)).toBe(res);
  });
});
