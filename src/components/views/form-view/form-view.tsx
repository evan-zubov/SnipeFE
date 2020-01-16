import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { resource } from "src/api";
import { useParams } from "react-router-dom";
import { map } from "lodash";
import { TextField, Typography, Grid, Button } from "@material-ui/core";

export type FormViewProps = {
  dataUrl: string;
  initialValues: any;
  idParam?: string;
};

export const FormView = ({
  dataUrl,
  initialValues,
  idParam = "id"
}: FormViewProps) => {
  const { register, handleSubmit, reset } = useForm();
  const [defaultValues, setDefaultValues] = useState(initialValues);
  const [dataResource, setDataResource] = useState(initialValues);
  const id = useParams()[idParam];

  useEffect(() => {
    if (dataUrl) {
      setDataResource(
        resource(dataUrl.replace(`/{${idParam}}`, `/${id}`), () => {
          return Promise.resolve({ data: { abc: "123", bcd: "234" } });
        })
      );
    }
  }, [dataUrl, id]);

  useEffect(() => {
    if (dataResource && id) {
      dataResource.GET().then(({ data }) => setDefaultValues(data));
    }
  }, [dataResource]);

  const onSubmit = formValues => {
    if (dataResource) {
      const method = id ? "PUT" : "POST";
      dataResource[method]({ body: formValues }).then(({ data }) =>
        reset(data)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {map(defaultValues, (value, key) => (
          <Grid item xs={6}>
            <TextField
              fullWidth
              key={key}
              id={key}
              inputRef={register}
              label={key}
              name={key}
              defaultValue={value}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
