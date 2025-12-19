import { it, expect } from "vitest";
import { TestContext, describeSdkSuite } from "./helpers/test-context";

describeSdkSuite("Employee Form Flow", () => {
  it("should get employee form and return form response", async () => {
    const ctx = new TestContext();

    ctx.mockEndpoint({
      method: "GET",
      path: "/v1/hris/employees/form",
      response: {
        body: {
          status: "success",
          data: {
            properties: {
              firstName: {
                type: "text",
                label: "First Name",
                required: true,
                description: "Employee's first name",
                unified_key: "first_name",
                min_length: 1,
                max_length: 100,
              },
              lastName: {
                type: "text",
                label: "Last Name",
                required: true,
                description: "Employee's last name",
                unified_key: "last_name",
                min_length: 1,
                max_length: 100,
              },
              startDate: {
                type: "date",
                label: "Start Date",
                required: true,
                description: "Employee's start date",
                unified_key: "start_date",
              },
              keyNumbers: {
                type: "array",
                label: "Key Numbers",
                required: false,
                description: "Employee's key numbers",
                unified_key: null,
                min_items: 2,
                max_items: 5,
                item_type: {
                  type: "number",
                  label: "Key Number",
                  required: false,
                  description: "The number of the keys which belong to the employee",
                  unified_key: null,
                  min: 0,
                  max: 99,
                },
              },
              workLocation: {
                type: "object",
                label: "Work Location",
                required: false,
                description: "Employee's work location",
                unified_key: null,
                properties: {
                  site: {
                    type: "single_select",
                    label: "Site",
                    required: true,
                    description: "Employee's site",
                    unified_key: null,
                    options: {
                      type: "inline",
                      entries: [
                        {
                          label: "Site 1",
                          id: "FXrER44xubBqA9DLgZ3PFNNx",
                          unified_value: "1",
                          remote_id: "site_1",
                        },
                        {
                          label: "Site 2",
                          id: "2rv75UKT2XBoQXsUb9agiTUm",
                          unified_value: "2",
                          remote_id: "site_2",
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          warnings: [],
        },
      },
    });

    // Make the API call
    const form = await ctx.kombo.hris.getEmployeeForm();

    // Verify the response structure
    expect(form).toBeDefined();
    expect(form.status).toBe("success");
    expect(form.data).toBeDefined();
    expect(form.data.properties.firstName).toBeDefined();
    expect(form.data.properties.keyNumbers).toBeDefined();
    expect(form.warnings).toEqual([]);
  });

  it("should create employee with form using realistic employee data", async () => {
    const ctx = new TestContext();

    ctx.mockEndpoint({
      method: "POST",
      path: "/v1/hris/employees/form",
      response: {
        body: {
          status: "success",
          data: {
            id: "emp-123",
            remote_id: "remote-emp-123",
            prehire: {
              remote_id: null,
            },
          },
          warnings: [],
        },
      },
    });

    // Make the API call with realistic employee properties
    const result = await ctx.kombo.hris.createEmployeeWithForm({
      properties: {
        firstName: "John",
        lastName: "Doe",
        startDate: "2025-01-15",
        keyNumbers: [142, 525, 63],
        workLocation: {
          site: "FXrER44xubBqA9DLgZ3PFNNx",
        },
      },
    });

    // Verify the response structure
    expect(result).toBeDefined();
    expect(result.status).toBe("success");
    expect(result.data).toBeDefined();
    expect(result.data.id).toBe("emp-123");
    expect(result.data.remote_id).toBe("remote-emp-123");
    expect(result.warnings).toEqual([]);

    // Verify request body is correctly serialized
    const request = ctx.getLastRequest();
    expect(request.method).toBe("POST");
    expect(request.body).toMatchInlineSnapshot(`
      {
        "properties": {
          "firstName": "John",
          "keyNumbers": [
            142,
            525,
            63,
          ],
          "lastName": "Doe",
          "startDate": "2025-01-15",
          "workLocation": {
            "site": "FXrER44xubBqA9DLgZ3PFNNx",
          },
        },
      }
    `);
  });
});

